// //error handler middleware
// import app from "express/lib/router";
// app.use((err, req, res, next) => {
//     //logging the error internally
//     console.error(err);
//     const statusCode = err.statusCode || 500;
//     res.status(statusCode).json({
//         message: err.message || 'An unexpected error occurred on the server.',
//     });
// });
