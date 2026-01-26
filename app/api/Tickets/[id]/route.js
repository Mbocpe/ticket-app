import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    try {
        const {id} = await params
        const foundTicket = await Ticket.findOne({_id: id});

        return NextResponse.json({foundTicket}, {status: 200})
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}

export async function DELETE(req, {params}) {
    try {
        const {id} = await params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json({message: "Successful deletion"}, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500});
    }
}

export async function PUT(req, {params}) {
    try {
        const {id} = await params;
        const body = await req.json();
        const ticketData = body.formData

        await Ticket.findByIdAndUpdate(id, {...ticketData});

        return NextResponse.json({message: "Successful update"}, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500});
    }
}