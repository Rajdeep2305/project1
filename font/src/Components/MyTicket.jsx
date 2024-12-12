import React, { useEffect, useState } from "react";
import { Ticket } from "../assets/assets";
import { useSearch } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";

const MyTicket = () => {
  const [tic, setTicket] = useState([]);
  useEffect(() => {
    const fetchEdu = async () => {
      try {
        const response = await fetch("/api/Ticket");
        if (!response.ok) {
          throw new Error(`Failed to fetch Ticket: ${response.statusText}`);
        }
        const data = await response.json();

        const EduWithKeys = data.map((ticket, index) => ({
          ...ticket,
          key: ticket._id || index, // Use _id if available, otherwise use index
        }));

        setTicket(EduWithKeys);
      } catch (error) {
        console.error("Error fetching Edu:", error);
        // Display an error message to the ticket
      }
    };

    fetchEdu();
  }, []);
  const navigate = useNavigate();
  const { searchQuery, updateSearchQuery } = useSearch();
  const [popup, popupUpdate] = useState(null);
  const [ShowPopup, setShowPopup] = useState(false);

  const OpenTicketDetails = (tic) => {
    popupUpdate(tic);
    setShowPopup(true);
  };

  const changeToDisplay = () => {
    setShowPopup(false);
  };

  const handleSearchChange = (e) => {
    updateSearchQuery(e.target.value);
  };

  const [show, setShow] = useState(5);
  const [page, setPage] = useState(1);

  const PrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const NextPage = () => {
    if (page * show < filteredTickets.length) {
      setPage(page + 1);
    }
  };

  const DisplayEntire = () => {
    setShow(filteredTickets.length);
    setPage(1);
  };

  const FirstPage = () => {
    setPage(1);
  };

  const LastPage = () => {
    const lastPage = Math.ceil(filteredTickets.length / show);
    setPage(lastPage);
  };

  const handleShowChange = (e) => {
    setShow(Number(e.target.value));
  };

  const filteredTickets = tic?.filter(
    (item) =>
      item?.Subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.TicketNo?.toString().includes(searchQuery.toLowerCase()) ||
      item?.Status?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {ShowPopup ? (
        <div className="fixed flex top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-[#00000070]">
          <div className="bg-[#fff] w-[751px] h-[567px] p-[47px]">
            <h2 className="text-[30px] text-center font-sanchez">
              Ticket Details
            </h2>
            {popup && (
              <div key={popup.TicketNo}>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Ticket No:</strong> {popup.TicketNo}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Date:</strong> {popup.Date}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Name:</strong> {popup.Name}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Dept:</strong> {popup.Dept}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Title:</strong> {popup.Title}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Description:</strong> {popup.Description}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Category:</strong> {popup.Category}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Type:</strong> {popup.Type}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Priority:</strong> {popup.Priority}
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Status:</strong> In Progress
                </p>
                <p className="text-[24px] text-justify font-sanchez">
                  <strong>Attachment:</strong> {popup.Attachment}
                </p>
              </div>
            )}
            <div className="flex justify-center items-center">
              <button
                className="w-[188px] h-[48px] bg-[#43D752] rounded-[10px]"
                onClick={changeToDisplay}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
      <p className="font-sanchez text-center text-[36px] my-[26px]">
        List of Tickets
      </p>
      <form action="" method="post" className="px-[71px] flex">
        <input
          type="text"
          name="find"
          id="find"
          placeholder="Find ticket"
          required
          value={searchQuery}
          onChange={handleSearchChange}
          className="h-[43px] w-[298px] 2xl:w-[450px] bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1"
        />
        <label className=" ml-[258px] 2xl:ml-[410px] cursor-pointer absolute h-[43px] flex justify-center items-center">
          <i className="fas fa-search fa-xl"></i>
        </label>
      </form>
      <div className="mt-[20px] px-[71px]">
        <div className="flex items-center">
          <p className="text-[24px] font-normal ">Show:</p>
          <select
            name="Show"
            id="Show"
            value={show}
            onChange={handleShowChange}
            className="h-[43px] mx-[5px] w-fit bg-[#D9D9D9] outline-none text-[24px] px-[12px] font-sanchez border-[1px] border-[#00000003] rounded-[10px] shadow-custom1 selection:bg-[#434343]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <div
            onClick={DisplayEntire}
            className="text-[24px] font-normal hover:underline cursor-pointer"
          >
            Entries
          </div>
        </div>
        <div className="mt-[20px] px-[71px]">
          <div className="overflow-auto max-h-[500px]">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-[24px] font-normal p-2 w-1/6">
                    Ticket No.
                  </th>
                  <th className="text-[24px] font-normal p-2 w-1/6">Subject</th>
                  <th className="text-[24px] font-normal p-2 w-1/6">Status</th>
                  <th className="text-[24px] font-normal p-2 w-1/6">
                    Support by
                  </th>
                  <th className="text-[24px] font-normal p-2 w-1/6">Date</th>
                  <th className="text-[24px] font-normal p-2 w-1/6">Rate</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.length ? (
                  <>
                    {filteredTickets
                      .slice((page - 1) * show, page * show)
                      .map((item) => (
                        <tr
                          key={item.TicketNo}
                          className="odd:bg-[#EAEAEA] even:bg-[#DEDEDE]"
                        >
                          <td
                            onClick={() => OpenTicketDetails(item)}
                            className="cursor-pointer text-[24px] font-normal p-2 text-center text-[#1400FF] underline"
                          >
                            {item.TicketNo}
                          </td>
                          <td className="text-[24px] font-normal p-2 text-center">
                            {item.Subject}
                          </td>
                          <td className="flex justify-center items-center p-2">
                            <div
                              className="text-[24px] font-normal w-[140px] h-fit p-2 rounded-[10px] text-center"
                              style={{
                                backgroundColor: '#5CDB95',
                                color: '#000',
                              }}
                            >
                              In Progress
                            </div>
                          </td>
                          <td className="text-[24px] font-normal p-2 text-center">
                          Operation Team
                          </td>
                          <td className="text-[24px] font-normal p-2 text-center">
                            {item.Date}
                          </td>
                          <td className="text-[24px] font-normal p-2 text-center">
                            <div className="flex items-center justify-center">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className="text-yellow-500 text-2xl"
                                >
                                  {i < item.rate ? "★" : "☆"}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </>
                ) : (
                  <tr>
                    <td
                      className="text-[26px] text-center bg-slate-200"
                      colSpan={6}
                    >
                      There are no data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between text-[24px]">
          {filteredTickets.length ? (
            <div>
              Showing {(page - 1) * show + 1} to{" "}
              {Math.min(page * show, filteredTickets.length)} of{" "}
              {filteredTickets.length} entries
            </div>
          ) : (
            <div>Showing 0 to 0 of 0 entries</div>
          )}
          <div className="flex justify-between items-center w-[100px]">
            <div className="cursor-pointer text-[30px]" onClick={FirstPage}>
              &laquo;
            </div>
            <div className="cursor-pointer text-[30px]" onClick={PrevPage}>
              &larr;
            </div>
            <div>{page}</div>
            <div className="cursor-pointer text-[30px]" onClick={NextPage}>
              &rarr;
            </div>
            <div className="cursor-pointer text-[30px]" onClick={LastPage}>
              &raquo;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTicket;
