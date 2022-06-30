

export const getNews = async ( req, res ) => {

    res.json({
        ok: true,
        msg: 'getNews'
    });

}

export const getNew = async ( req, res ) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'getNew',
        id
    });

}

export const postNew = async ( req, res ) => {

    res.json({
        ok: true,
        msg: 'postNew'
    });

}

export const deleteNew = async ( req, res ) => {
    
    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'deleteNew',
        id
    });

}