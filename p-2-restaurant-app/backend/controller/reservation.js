


const {ErrorHandler} = require('../error/error');
const Reservation = require('../models/reservationSchema');

const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill up completely", 400));
    }

    try {
        // Create a new reservation
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date,
        });

        // Send success response
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name === "ValidationError") {
            const ValidationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(ValidationErrors.join(", "), 400));
        }

        // Pass other errors to the error handler
        next(error);
    }
};

module.exports = sendReservation;
