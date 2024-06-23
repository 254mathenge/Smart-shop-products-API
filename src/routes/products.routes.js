import { Router } from "express";

import {getAllProducts ,getSingleProducts ,createProduct ,updateProduct ,deleteProduct} from "../controllers/products.controllers.js"
const router = Router();
router.get("/",getAllProducts);

router.get("/:id", getSingleProducts);

router.post("/" ,createProduct);

router.patch("/:id" ,updateProduct);
  
    router.delete("/:id" ,deleteProduct);

    export default router;