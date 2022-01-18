import { useSelector } from 'react-redux';
import { getRooms } from '../redux/rooms/rooms';
import { RoomList } from '../components/Rooms';

const RoomsPage = () => {
  const rooms = useSelector(getRooms);

  return (
    <div className="container pt-4 justify-content-center">
      <h3 className="h3 mb-10 text-align-center">AVAILABLE ROOMS</h3>
      <RoomList data={rooms} />
    </div>
  );
};

export default RoomsPage;
