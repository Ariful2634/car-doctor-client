


const Book = ({ book,handleDelete,handleUpdate }) => {
    const {_id, img, date, price, ServiceName,status } = book;


    

    return (
        <div>


            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td className="mr-10">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {ServiceName}
                    <br />

                </td>
                <td>{date}</td>
                <td>{price}</td>
                <th>
                   {
                    status === 'confirm' ?  <span className="font-bold text-blue-600">Confirm</span>:
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Pending</button>}
                </th>
            </tr>
        </div>

    );
};

export default Book;