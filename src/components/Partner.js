import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Partner.css';

function Partner() {
  const navigate = useNavigate()

const [firstName, setFirstName] = useState('');
const [LastName, setLastName] = useState('');
const [DOB, setDOB] = useState('');
const [gender, setGender] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [country, setCountry] = useState('');
const [city, setCity] = useState('');
const [isMember, setIsMember] = useState('')
const [response, setResponse] = useState('');
const [hasBranch, setHasBranch] = useState('');
const [occupation, setOccupation] = useState('');
const [hasTraining, setHasTraining] = useState('');
const [state, setState] = useState([])






// function to handle check state

const handleChange = (event) =>{
  const {value, checked} = event.target
 if(checked){
  setState((prev) => [...prev, value])
 } 
 else if(!checked){
  setState(prev => {
    return [prev.filter((x)=> value[x])]
  })
 }

  console.log(state)
 
}


const checkIsMember = (event) =>{
  const {value, checked} = event.target
  if(checked){
    setIsMember(value);
  }

  console.log(isMember)
}


  return (
    <div className="bg-color">
    <div className='partners__form container py-5 mx-auto'>
      <div className='header__text'>
      <h2 className='text-center pb-4  header__transition'>PARTNER WITH THESCOM</h2>
      </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="firstName">First Name</label>
              <input type='text' name='firstName' id='firstName' className='form-control' required onChange={(e) =>{
                setFirstName(e.target.value);
              }}/>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="LastName">Last Name</label>
              <input type='text' name='LastName' id='LastName' className='form-control' required onChange={(e) =>{
                setLastName(e.target.value);
              }}/>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="DOB">Date of Birth</label>
              <input type='text' name='DOB' id='DOB' className='form-control' required onChange={(e)=>{
                setDOB(e.target.value);
              }}/>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="gender">Gender</label>
              <input type='text' name='gender' id='gender' className='form-control' required onChange={(e)=>{
                setGender(e.target.value);
              }}/>
            </div>
          </div>

            <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor='email' >Email</label>
              <input type='email' name='email' id='email' className='form-control' required onChange={(e) =>{
                setEmail(e.target.value);
              }}/>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type='text' name='phoneNumber' id='phoneNumber' className='form-control' required onChange={(e)=>{
                setPhoneNumber(e.target.value);
              }}/>
            </div>
          </div>

            <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="country">Country</label>
              <input type='text' name='country' id='country' className='form-control' required onChange={(e)=>{
                setCountry(e.target.value);
              }}/>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="City">City</label>
              <input type='text' name='City' id='City' className='form-control' required onChange={(e)=>{
                setCity(e.target.value);
              }}/>
            </div>
          </div>

            <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="membership">Are you a member of THESCOM?</label>
              <div className="form-check py-2">
                <input type="radio" className='form-check-input' id='yes' onChange={checkIsMember} value='Yes' />
                <label htmlFor="yes" className='form-check-label'>Yes</label>
              </div>
              <div className="form-check py-2">
                <input type="radio" className='form-check-input' id='no' onChange={checkIsMember} value='No'/>
                <label htmlFor="no" className='form-check-label'>No</label>
              </div>

            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="description">If Yes, Which THESCOM branch? If No, which church do you belong?</label>
            <input type='text' id='description' className='form-control'/>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="branch">Do you have a THESCOM branch in your town or close to you?</label>
              <div className="form-check py-2">
                <input type="radio" className='form-check-input' id='yes' />
                <label htmlFor="yes" className='form-check-label'>Yes</label>
              </div>
              <div className="form-check py-2">
                <input type="radio" className='form-check-input' id='no' />
                <label htmlFor="no" className='form-check-label'>No</label>
              </div>

              <div className="form-check py-2">
                <input type="radio" className='form-check-input' id='unsure' />
                <label htmlFor="unsure" className='form-check-label'>I don't know</label>
              </div>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="occupation">What is your Occupation?</label>
            <input type='text' id='occupation' className='form-control'/>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 p-3">
              <label htmlFor="training">Do you have any ministry training or certification? If Yes, Please explain or list titles</label>
              <input type='text' name='training' id='training' className='form-control' required/>
            </div>
            <div className="col-sm-6 p-3">
              <label htmlFor="area" className='pb-3'>In which ways do you like to become part of the THESCOM family? (select all that apply)</label>

              <div className="form-check pb-2">
              <input type='checkbox' name='Become a Lay Pastor' id='layPastor' className='form-check-input' required onChange={handleChange} value='Become a Lay Pastor'/>
              <label htmlFor="layPastor" className='form-check-label'>Become a Lay Pastor</label>
              </div>

              <div className="form-check pb-2">
              <input type='checkbox' name='Become a Church Leader' id='churchLeader' className='form-check-input' required onChange={handleChange} value='Become a Church Leader'/>
              <label htmlFor="churchLeader" className='form-check-label'>Become a Church Leader</label>
              </div>

              <div className="form-check pb-2">
              <input type='checkbox' name='Start a Branch' id='startChurch' className='form-check-input' required onChange={handleChange} value='Start a Church'/>
              <label htmlFor="tartChurch" className='form-check-label'>Start a Branch</label>
              </div>

              <div className="form-check pb-2">
              <input type='checkbox' name='Start a Home Cell' id='startHomeCell' className='form-check-input' required onChange={handleChange} value='Start a Home Cell or Fellowship'/>
              <label htmlFor="startHomeCell" className='form-check-label'>Start a Home cell or Fellowship</label>
              </div>

              <div className="form-check pb-2">
              <input type='checkbox' name='I want a branch near me that i can attend' id='needBranch' className='form-check-input' required onChange={handleChange} value='I want a branch near me that i can attend'/>
              <label htmlFor="needBranch" className='form-check-label'>I want a branch near me that i can attend</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 py-2">
              <p>
                Thank you for filling the form and choosing to be part of the THESCOM family. Kindly WhatsApp the +233 504 177 709 for us to get in touch with you.
              </p>
            </div>
            <div className="col-sm-6 py-2 mx-auto">
              <input type='submit' className='btn btn-lg btn-success w-50 mx-auto' placeholder='Submit'/>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Partner