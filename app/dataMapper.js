import client from './database.js';

const dataMapper = {

    getAllFigurines: async () => {
        const sql = `SELECT figurine.*, AVG(review.note) FROM figurine INNER JOIN review ON figurine.id = review.figurine_id GROUP BY figurine.id;`;
        //const sql = 'SELECT * FROM figurine;';

        const result = await client.query(sql);
        return result.rows;

    },

    getOneFigurine: async (id) => {

        const sql = {
            text: `SELECT * FROM figurine WHERE id = $1;`,
            values: [id],           
        };

       // const sql = `SELECT * FROM figurine WHERE id = ${id}`;

        const result = await client.query(sql);
        return result.rows[0];

    },

    getArticleRewiew: async (id) => {

        const sql = { 
            text: `SELECT * FROM review WHERE figurine_id = $1;`,
            values: [id],
        };

        const result = await client.query(sql);
        return result.rows;
        
    },

    getArticleCategory: async () => {

        const sql = `SELECT category, COUNT(category) FROM figurine GROUP BY category;`;
        const result = await client.query(sql);
        return result.rows;

    },

    getAverageNote: async (id) => {

        //const sql = `SELECT AVG(note) FROM review WHERE figurine_id = ${id};`
        const sql = {
            text: `SELECT AVG(note) FROM review WHERE figurine_id = $1;`,
            values: [id],
        }


        const result = await client.query(sql);
        return result.rows[0];
        
    },

    getFigurinesByCategory: async (value) => {
        const sql = {
            text: `SELECT * FROM figurine WHERE category = $1;`, // Mettre ILIKE a là place de "=" au cas ou pour la casse.
            values: [value],
        };
        const result = await client.query(sql);
        return result.rows;
    }
};

export default dataMapper;