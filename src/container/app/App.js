import React, { useState } from 'react';
import {
  StyledWrapper,
  StyledHeader,
  GlobalStyle,
  StyledWave,
  StyledForm,
  StyledLottery,
  StyledLighthouse,
  StyledFooter,
} from '../styled/AppStyled';
import green_medal from '../images/green_medal.svg'
import blue_medal from '../images/blue_medal.svg'
import lighthouse from '../images/lighthouse.svg'
import market from '../images/market.svg'
import fork from '../images/fork.svg'
import vector from '../images/vector.svg'
import StoreData from '../data/store'
import Select from "react-dropdown-select";

function App() {
  const handleSubmit = () => {
    const phone = document.querySelector('.phone')
    const phoneReg = /^09[0-9]{8}$/;
    var phoneValue = phone.value
    const name = document.querySelector('.name')
    var nameValue = name.value
    const nameReg = /^[a-zA-Z\u4E00-\u9FA5]+$/;
    const amount = document.querySelector('.amount')
    var amountValue = Number(amount.value)

    const submit = document.querySelector('.submit')
    const failure = document.querySelector('.failure')
    const success = document.querySelector('.success')

    if (!nameReg.test(nameValue)) {
      name.classList.add('border_red')
    } else {
      name.classList.remove('border_red')
    }
    if (!phoneReg.test(phoneValue)) {
      phone.classList.add('border_red')
    } else {
      phone.classList.remove('border_red')
    }
    if (!(amountValue > 0)) {
      amount.classList.add('border_red')
    } else {
      amount.classList.remove('border_red')
    }
    if (nameReg.test(nameValue) && phoneReg.test(phoneValue) && (amountValue > 0)) {
      success.classList.remove('disNone')
      failure.classList.add('disNone')
    } else {
      submit.classList.add('disNone')
      failure.classList.remove('disNone')
      success.classList.add('disNone')
    }
  }
  const [selectedOptions, setSelectedOptions] = useState( [ ] )
  return (
    <StyledWrapper>
      <GlobalStyle />
      <StyledHeader>
        <div className='container'>
          <div className="white_wave"></div>
          <div className="title">
            <div className="one">There is no one</div>
            <div className="two">who loves pain</div>
          </div>
          <a href="#form"><button className="btn">form</button></a>
          <div className="parabox">

            <div className='sup'></div>
            <div className='paddle'></div>
            <div className='bubble'></div>
            <div className='bubble2'></div>
            <div className='box box_1'>
              <div className="para_title">paragraph</div>
              <div className="para">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className='box'>
              <div className="para_title">paragraph</div>
              <p className="para">1. Quisque sodales leo <span className='focus_1'>vitae vulputate auctor.</span></p>
              <p className='para'>2. Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit.</p>
              <p className='para'>3. Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.</p>
              <p className='para'>4. Donec ultrices sapien <span className='focus_2'>vitae leo venenatis ullamcorper.</span></p>
            </div>
            <div className='sup_fireworks'></div>
            <div className='fireworks'></div>
          </div>
        </div>
      </StyledHeader>
      <StyledWave />
      <StyledForm id="form">
        <div className='container'>
          <div className='form'>
            <div className='title'><div className='turtle'></div>form</div>
            <div className='select_box select_box_1'>
              <label for="store" className='select_title'>store<span className='red'>*</span></label>
              {/* <select required name="store" className='store'>
                {StoreData.map((store, index) => {
                  return (
                    <option value={store.store}>{store.store}</option>
                  )
                })}
              </select> */}
              <Select className='store' searchable="true" options={ StoreData.map( ( item, index ) => { 
                return { value: item.id, label: item.store }
                } ) } values={selectedOptions} onChange={ ( values ) => setSelectedOptions([...values]) } />
            </div>
            <div className='select_box'>
              <label for='name' className='select_title'>name<span className='red'>*</span></label>
              <input required name='name' className='name' placeholder='placeholder text'/>
            </div>
            <div className='select_box'>
              <label for='phone' className='select_title'>phone<span className='red'>*</span></label>
              <input required name='phone' className='phone' placeholder='placeholder text'/>
            </div>
            <div className='select_box'>
              <label for='amount' className='select_title'>amount<span className='red'>*</span></label>
              <input required type="number" name='amount' className='amount' placeholder='placeholder text'/>
            </div>
            <div className='select_box'>
              <label for="store" className='select_title'>store<span className='red'>*</span></label>
              <select required name="store" className='store'>
                <option value="">digital payment</option>
                <option value="">ATM</option>
              </select>
            </div>
          </div>
          <button className="btn submit" onClick={handleSubmit}>submit</button>
          <button className="btn failure disNone" onClick={handleSubmit}><img src={fork} alt="fork"/>failure</button>
          <button className="btn success disNone" onClick={handleSubmit}><img src={vector} alt="vector"/>success</button>
        </div>
      </StyledForm>
      <StyledLottery>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={green_medal} alt="green_medal"></img>
                <div className='level'>A</div>
                <div className='number green'>one</div>
                <div className='text green'>dehumidifier</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={green_medal} alt="green_medal"></img>
                <div className='level'>B</div>
                <div className='number green'>one</div>
                <div className='text green'>range hood</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={green_medal} alt="green_medal"></img>
                <div className='level'>C</div>
                <div className='number green'>one</div>
                <div className='text green'>vacuum cleaner</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={blue_medal} alt="green_medal"></img>
                <div className='level'>D</div>
                <div className='number blue'>one</div>
                <div className='text blue'>toaster</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={blue_medal} alt="green_medal"></img>
                <div className='level'>E</div>
                <div className='number blue'>one</div>
                <div className='text blue'>scale</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={blue_medal} alt="green_medal"></img>
                <div className='level'>F</div>
                <div className='number blue'>one</div>
                <div className='text blue'>straightening iron</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={blue_medal} alt="green_medal"></img>
                <div className='level'>G</div>
                <div className='number blue'>five</div>
                <div className='text blue'>vacuum cleaner</div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='prize'>
                <img src={blue_medal} alt="green_medal"></img>
                <div className='level'>H</div>
                <div className='number blue'>ten</div>
                <div className='text blue'>rice cooker</div>
              </div>
            </div>
          </div>
        </div>
      </StyledLottery>
      <StyledLighthouse>
        <div className='container'>
          <span className='slash'></span>
          <div className='text'>
            <div className='brown'>13.32</div>
            <div className='dark_blue'>who seeks after it and wants to have it</div>
          </div>
          <span className='slash'></span>
          <img src={lighthouse} alt="lighthouse"></img>
        </div>
      </StyledLighthouse>
      <StyledFooter>
        <div className='title'>Neque porro quisquam est qui dolorem!</div>
        <img src={market} alt="market"></img>
      </StyledFooter>
    </StyledWrapper>
  );
}

export default App;
