// vamos a crear un CRUD

import * as DB from "../../db";

export const show = (req, res) => {
    return res.json({
        ok: true,
        data: "Bienvenido a mi Página",
    })
}
