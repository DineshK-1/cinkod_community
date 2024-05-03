export const verifyHeaderHasToken = (req: Request): string => {
    const token = req.headers.get("Authorization")?.split("Bearer ")[1];
    if (!token) {
        throw new Error("No token found in Authorization header");
    }
    return token;
};
