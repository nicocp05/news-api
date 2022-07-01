import { News } from "../models/news.js";


export const getNews = async ( req, res ) => {

    try {

        const news = await News.find();

        console.log(news);

        if(news.length < 1) {
            return res.json({
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
        
        await news.save();

        res.status(200).json({
            ok: true,
            msg: 'News created'
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