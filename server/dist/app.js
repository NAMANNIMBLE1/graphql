import dotenv from 'dotenv';
import express from 'express';
dotenv.config({ path: './.env' });
const PORT = Number(process.env.PORT) || 8000;
const app = express();
app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map