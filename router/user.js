const express = require("express");
const { getUserInforById, getListUser, updateUser, deleteUser } = require("../controllers/userCtrl");
const adminMdw = require("../middlewares/adminMdw");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const { authMdw } = require("../middlewares/authMdw");
const router = express.Router();

router.get(
   "/:id",
   authMdw,
   asyncWrapper(async (req, res) => {
      const userInfor = await getUserInforById(req.params.id);
      res.status(200).json(userInfor);
   })
);

router.get(
   "/",
   adminMdw,
   asyncWrapper(async (req, res) => {
      const { page = 1, limit = 10 } = req.query;
      const [data, total] = await getListUser(page, limit);

      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Expose-Headers", "X-Total-Count,Content-Range,X-Count,X-Total-Page");
      res.setHeader("X-Total-Count", total);
      res.setHeader("X-Total-Page", total % limit ? Math.floor(total / limit) + 1 : total / limit);
      res.setHeader("X-Count", data.length);
      res.setHeader("Content-Range", `posts ${(+page - 1) * +limit} - ${(+page - 1) * +limit + data.length}/${total}`);
      res.status(200).json(data);
   })
);

router.patch(
   "/:id",
   authMdw,
   asyncWrapper(async (req, res) => {
      const updatedUser = await updateUser(req.params.id, req.body);
      res.status(200).json(updatedUser);
   })
);

// for jest test 
router.delete(
   "/",
   authMdw,
   asyncWrapper(async (req, res) => {
      const deletedUser = await deleteUser(req.user);
      res.status(200).json({ ...deletedUser, salt: undefined, hash: undefined });
   })
);

module.exports = router;
