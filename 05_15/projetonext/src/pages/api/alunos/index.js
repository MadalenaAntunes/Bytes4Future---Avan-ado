// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

"/api/alunos/"
export default function handler(req, res) {
    if (req.method === "POST") {
        return res.status(200).json({ name: "Hello" });
    }
    if (req.method === "DELETE") {
        return res.status(200).json({ name: "Hello" });
    }
    return res.status(404).json({ name: "method_not_implemented" });
}