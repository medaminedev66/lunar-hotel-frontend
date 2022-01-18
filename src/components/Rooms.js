/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const getRooms = (state) => state.rooms.Id;
export const getRoomsByID = (id) => (state) => state.rooms.byId[id];

const Room = ({ id }) => {
  const { name, picture, rate } = useSelector(getRoomsByID(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div className="room">
        <img src={picture} alt={name} />
        <div className="h4 room-name">{name}</div>
        <div className="h5 room-rate">
          $
          {' '}
          {rate}
        </div>
      </div>
    </Link>
  );
};

export const RoomList = ({ data = [] }) => (
  <div className="rooms-list">
    {data.map((id) => <Room key={id} id={id} />)}
  </div>
);

const Rooms = () => {
  const roomIds = useSelector(getRooms);

  return (
    <div className="container pt-4 justify-content-center">
      <h3 className="h3 mb-10 text-align-center">AVAILABLE ROOMS</h3>
      <RoomList data={roomIds} />
    </div>
  );
};
export default Rooms;
