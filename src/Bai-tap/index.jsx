import Seat from "./Seat";
import { useSelector } from "react-redux";
import Header from "./_component/header";
import "./BaiTapBookingTicket.css";

export default function HomePage() {
  const props = useSelector((state) => state.bookingTicketReducer);
  console.log(props);

  const { listSeats, listSeatsSelected } = props;

  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="space-x-12">
        <span></span>
        {data.danhSachGhe.map((item) => {
          return <span key={item.soGhe}>{item.soGhe}</span>;
        })}
      </div>
    );
  };
  const renderListSeats = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;
      return (
        <div className="space-x-10 space-y-10" key={row.hang}>
          <span>{row.hang}</span>
          {row.danhSachGhe.map((seat) => {
            return <Seat key={seat.soGhe} seat={seat} />;
          })}
        </div>
      );
    });
  };
  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seats) => (total += seats.gia), 0);
  };
  return (
    <div className="container mx-auto ">
      <div className="flex">
        {/* render ra số thứ tự ghế */}
        <div className="w-[80%]">
          <Header />
          {renderRowIndex()}
          {renderListSeats()}
        </div>
        <div className="w-[20%]">
          <h1 className="text-2xl">Danh sách ghế đang đặt</h1>
          <div>
            <div className="flex m-2 items-center">
              <div className="w-[20px] h-[20px] bg-orange-500 mr-4"></div>
              <div>Ghế đã đặt</div>
            </div>
            <div className="flex m-2 items-center">
              <div className="w-[20px] h-[20px] bg-green-500 mr-4"></div>
              <div>Ghế đang chọn</div>
            </div>
            <div className="flex m-2 items-center">
              <div className="w-[20px] h-[20px] bg-gray-500 mr-4"></div>
              <div>Ghế chưa đặt</div>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full table-auto bg-white shadow-md rounded-lg">
              <thead>
                <tr class="bg-gray-200 text-gray-700">
                  <th class="px-6 py-3 text-left">Ghế</th>
                  <th class="px-6 py-3 text-left">Giá</th>
                </tr>
              </thead>
            </table>
          </div>
          {listSeatsSelected.map((seat) => (
            <div class="overflow-x-auto">
              <table class="min-w-full table-auto bg-white shadow-md rounded-lg">
                <thead>
                  {/* <tr class="bg-gray-200 text-gray-700">
                    <th class="px-6 py-3 text-left">Ghế</th>
                    <th class="px-6 py-3 text-left">Giá</th>
                  </tr> */}
                </thead>
                <tbody>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-6 py-4">{seat.soGhe}</td>
                    <td class="px-6 py-4">{seat.gia}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            // <div key={seat.soGhe}>
            //   Ghế: {seat.soGhe} -Giá: {seat.gia}

            // </div>
          ))}
          <div>Total: {totalPrice()}</div>
        </div>
      </div>
    </div>
  );
}
