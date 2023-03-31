import React, { useState, useContext} from 'react'
import { AuthContext } from './context/AuthContext';
import { EventsContext } from './context/EventContext';
function Profile() {
  const { user } = useContext(AuthContext);
  const { events } = useContext(EventsContext)
  console.log(user.first_name)
  const [first_name, setFirstName] = useState('user.first_name');
  const [last_name, setLastName] = useState(user.last_name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState();
  const level = sessionStorage.getItem("level");
  const [event, setEvent] = useState('')
  console.log(event)
  function showDetail(id) {
    fetch(`http://localhost:3000/events/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${sessionStorage.token}`
      }
     })
    .then(res => res.json())
    .then(response => {
      setEvent(response)
  })
}
  function handleDelete() {
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
    return (
        <div style={{ marginTop: "10vh" }}>
            <div className='container-md'>
                <div>
                    <div className='row'>
                        <div className='col'>
                            <h5>My Profile</h5>
                            <div className='data'>
                          <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="first-name">First Name</label><br/>
    <input
      type="text"
      id="first-name"
      name="first-name"
      onChange={(e) => setFirstName(e.target.value)}
                        value={first_name}
                        placeholder={user.first_name}
    />
  </div>
  <div>
    <label htmlFor="last-name">Last Name</label><br/>
    <input
      type="text"
      id="last-name"
      name="last-name"
                        value={last_name}
                        onChange={(e) =>
                          setLastName( event.target.value )
                        }
    />
  </div>
  <div>
    <label htmlFor="email">Email</label><br/>
    <input
      type="text"
      id="email"
      name="email"
                        onChange={(e) =>
                          setEmail(event.target.value)}
      value={email}
    />
  </div>
  <div>
    <label htmlFor="phone">Phone</label><br/>
    <input
      type="tel"
      id="phone"
      name="phone"
      onChange={(e) => setPhone(e.target.value)}
      value={phone}
    />
  </div>
  <div>
    <label htmlFor="image">Image</label><br/>
    <input
      type="file"
      id="image"
                        name="image"
                        value={image}
      onChange={(e) => setImage(e.target.files[0])}
    />
  </div>
  <div className='d-flex gap-4'>
    <button type='submit'>Update</button>
    <button type='button' onClick={handleDelete}>Delete</button>
  </div>
</form>
                            </div>
                        </div>
                        <div className='col'>
                            {level === "admin" ?
                                    (
                                        <>
                      <div>
                        <div className='d-flex'>
                          <h5>EVENTS</h5>
                          <button>Create new event</button>
                        </div>
                        <div>
                          {events && events.map((event, index) => (
                            <card className='d-flex gap-4' style={{margin:"7px"}} key={index}>
                            <img style={{width:"200px", height:"120px"}} src={event.poster_url} alt=''/>
                            <div>
                                <p>{event.event_name}</p>
                                <p>{event.event_date} {event.start_time}</p>
                                <button type="button" onClick={(e) => showDetail(event.id)} class="btn btn-primary" data-toggle="modal" data-target="#bookModal"><i className='bi bi-pencil-square'></i></button>
                                <button><i className='bi bi-trash'></i></button>
                            </div>
                            </card>
                             ))}
                        </div>
                                        </div>
                                        </>
                                    ) : (
                                        <>
                      <div>
                        <h5>my bookings</h5>
                      </div> 
                                        </>
                                    )
                            }
                        </div>
            </div>
            <div class="modal fade" id="bookModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
              <form >
                <div className='row'>
                  <div className='col'></div>
                   <div className='col'></div>
                </div>
                <h5>Ticket: </h5>
           <h5>Tickets left: </h5>
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount"  />
      <label htmlFor="currency">Currency</label>
      <select id="currency" >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="KES">KES</option>
        <option value="CAD">CAD</option>
      </select>
      <label htmlFor="description">Description</label>
      <input type="text" id="description"  />
      <button type="submit">Pay Now</button> 
      <button type="button" >Cancel</button>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">BOOK</button>
        <button type="button" class="btn btn-primary">Cancel</button>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
    </div>
  )
}
export default Profile