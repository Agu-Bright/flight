import Ticket from "@model/ticket";
import connectDB from "@utils/connectDB";

export const POST = async (req, res) => {
  try {
    await connectDB;
    const body = await req.json();
    console.log(body);
    const newTicket = await Ticket.create(...body);
    return new Response(JSON.stringify({ success: true, newTicket }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
};
