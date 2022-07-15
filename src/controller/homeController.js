import { getUserList, deleteUser, createNewUser } from "../service/userService";

const handleUserGetAPI = async (req, res) => {
    let userList = await getUserList();
    return res.status(200).json(userList);
};

const handleDelteUserAPI = async (req, res) => {
    await deleteUser(req.params.id);
    return res.status(200).json({
        message: `User with the id = ${req.params.id} is deleted successfully!`,
        errCode: 0,
    });
};

const handleCreateNewUserAPI = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    setTimeout(async () => {
        await createNewUser(email, password, username);

        return res.status(200).json({
            message: `A new User is created successfully!`,
            errCode: 0,
        });
    }, 5000);
};

module.exports = {
    handleUserGetAPI,
    handleDelteUserAPI,
    handleCreateNewUserAPI,
};
