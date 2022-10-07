

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../utill/connectDB"

connectDB();
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
