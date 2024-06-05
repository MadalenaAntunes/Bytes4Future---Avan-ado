// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// "/api/hello"
export default function handler(req, res) {
  if(req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  }
  res.status(404).json({ message: "method_not_implemented" });
}
