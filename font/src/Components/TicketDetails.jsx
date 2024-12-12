import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ticket = location.state;

  if (!ticket) {
    return (
      <div>
        <p>No ticket data available</p>
        <button onClick={() => navigate("/MyTicket")}>Back to Tickets</button>
      </div>
    );
  }

  return (
    <div className="fixed flex top-0 left-0 w-screen h-screen justify-center items-center bg-[#00000070]">
      <div className="bg-[#fff] w-[751px] h-[567px] p-[47px]">
        <h2 className="text-[30px] text-center font-sanchez">Ticket Details</h2>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Ticket No:</strong> {ticket?.TicketNo}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Date:</strong> {ticket?.date}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Name:</strong> {ticket?.Name}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Dept:</strong> {ticket?.Dept}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Title:</strong> {ticket?.Title}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Description:</strong> {ticket?.Description}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Category:</strong> {ticket?.Category}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Type:</strong> {ticket?.Type}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Priority:</strong> {ticket?.Priority}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Status:</strong> {ticket?.Status}
        </p>
        <p className="text-[24px] text-justify font-sanchez">
          <strong>Attachment:</strong> {ticket?.Attachment}
        </p>
        <div className="flex justify-center items-center">
          <button
            className="w-[188px] h-[48px] bg-[#43D752] rounded-[10px] "
            onClick={() => navigate("/MyTicket")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
