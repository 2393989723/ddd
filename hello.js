// Vercel Serverless Function 示例
export default function handler(request, response) {
  // 设置响应头，允许跨域请求（重要！）
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 返回一个JSON响应
  response.status(200).json({ 
    message: "Hello from the backend API!",
    time: new Date().toISOString()
  });
}