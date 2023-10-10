const {Router}=require("express")
const {getToDo,saveToDO, updateToDo, deleteToDo } = require("../Controllers/TodoController")
const router = Router()

router.get('/', getToDo)
router.post('/save',saveToDO)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

module.exports = router;