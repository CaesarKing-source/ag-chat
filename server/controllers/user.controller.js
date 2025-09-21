import { asyncHandler } from "../utilities/asyncHandler.js"

export const registerUser = asyncHandler((req, res) => {
    const { full_name, email, password, username } = req.body;
    if(!full_name || !email ||!password ||!username) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }

    res.status(500).json({
        success: false,
        message: "Unable to register user", 
        error: err.message
    })
}
)

export const loginUser = async (req, res) => {

}