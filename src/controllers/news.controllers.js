import { News } from "../models/news.js";


export const getNews = async ( req, res ) => {


    try {

        const news = await News.find()
                               .where('archiveDate')
                               .equals(null)
                               .sort({date: 'desc'});


        if(news.length < 1) {
            return res.status(400).json({
                ok: false,
                msg: 'News is empty'
            });
        }

        res.status(200).json({
            ok: true,
            news
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}

export const getArchivedNews = async ( req, res ) => {
    

    try {

        const news = await News.find()
                               .where('archiveDate')
                               .ne(null)
                               .sort({archiveDate: 'desc'});


        if(news.length < 1) {
            return res.json({
                ok: false,
                msg: 'Archived News is empty'
            });
        }

        res.status(200).json({
            ok: true,
            news
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}

export const getNew = async ( req, res ) => {

    const id = req.params.id;

    try {

        const news = await News.findById(id);

        if(!news) {
            return res.status(404).json({
                ok: false,
                msg: 'News not founded'
            });
        }

        res.status(200).json({
            ok: true,
            news
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}

export const postNew = async ( req, res ) => {

    const news = new News(req.body);

    try {
        
        const createdNews = await news.save();

        res.status(201).json({
            ok: true,
            msg: 'News created',
            createdNews
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}

export const putNew = async ( req, res ) => {

    const id = req.params.id;
    const body = req.body;

    try {
        
        const news = await News.findById(id);

        if(!news) {
            return res.status(404).json({
                ok: false,
                msg: 'News not founded'
            });
        }

        await News.findByIdAndUpdate(id, body);

        res.status(200).json({
            ok: true,
            msg: 'News updated'
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}

export const deleteNew = async ( req, res ) => {
    
    const id = req.params.id;

    try {

        const news = await News.findById(id);

        if(!news) {
            return res.status(404).json({
                ok: false,
                msg: 'News not founded'
            });
        }

        await News.findByIdAndDelete(id);

        res.json({
            ok: true,
            msg: 'News deleted'
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Server error'
        });
    }

}