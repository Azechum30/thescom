
import CardImage from '../components/card.jpg'
import ApostleImage from '../components/Apostle.jpg'
import Prayer from '../components/prayer.jpg'
import Dominion from '../components/Limits.jpg'
import Hour from '../components/hour.jpg'
import './WeeklyMeetings.css'
import ApostleJake from '../components/ApostleJake.jpg'

const text = <p>You are welcome to The <strong>Second Coming Ministries [THESCOM Incorporated]</strong>. We are one church in many locations across the nation of Ghana. We are a united family of Christ with a great delight to see the nations of our world turned onto Jesus.
<br/>
<br />

<b>THESCOM Incorporated</b> was founded by Apostle Jacob Napari on <b>7th April, 2010</b>. The ministry was formerly into only inter-denominational missions right from her conception but has since from May 2021 commemorated an incorporated mission which includes the running of a church vision. 
<br /> <br />

We are headquartered at The Second Coming Cathedral located in Tamale, the Northern region of Ghana. We have branches scattered across <b>Northern, North East, Upper East, Ashanti and Bono Ahafo</b> regions of Ghana. We are still a growing church and ministry with a great emphasis on the Great Commission. 
</p>


const bio = <div>
    <p>Apostle Jacob Napari is the Founder and Presiding President of <b>The Second Coming Ministries [THESCOM],</b>  headquartered in Tamale, Ghana.
    <br/>
    <br />
    The Second Coming Ministries, one church in many locations, has about 40 branches in the nation of Ghana. Known popularly as an Endtime Apostolic voice, Apostle Jacob Napari preaches the word of God with a deep and great passion with the intent of winning the hearts of his listeners for the Lord Jesus Christ and His Kingdom. 

    <br/> 
    <br/>
    Apostle's Message is centered on the Move of God, the Holy Spirit, righteousness, discipline and order in the body, Kingdom service and the ultimate Return of our Lord and Savior Jesus Christ.

    <br/><br/>
    With a meticulous approach towards the things of God, Apostle Jacob Napari has mentored several Ministers of the Gospel within and without The Second Coming Ministries. He is a protagonist for God's Kingdom and a functionary with sterling leadership qualities.
    </p>
</div>

export const Data = [{
  key: 1,
  imageUrl : CardImage,
  descriptions : text
},

{
  key: 2,
  imageUrl : ApostleImage ,
  descriptions : bio
},


]


// Data for Services

const sunday = <p>SUNDAY SERVICE: <span className='timestamp'>6AM | 9AM</span></p>
const tuesday = <p>WORLD WITHOUT LIMITS: <span className='timestamp'>5PM</span></p>
const friday = <p>DOMINION HOUR: <span className='timestamp'>6PM</span> </p>

export const Services = [
  {
  key : 1,
  serviceImage : Prayer,
  serviceDesc : sunday
},

{
  key : 2,
  serviceImage : Dominion,
  serviceDesc : tuesday
},

{
  key : 3,
  serviceImage : Hour,
  serviceDesc : friday
}
]


const hist = <div>
  {bio}
  <p>
    Apostle Jacob Napari is also the Founder and President of the Apostlic Council, a network of seasoned and well pruned Ministers of the Gospel of Jesus who oversees and protects the church against ill and false doctrines. The Apostolic council defends the doctrines of Christ, the Christian Faith and the Holy Scriptures against all sorts of pollution. <br /> <br />
    
    The Council provides seasoned counsel on all comtemporary matters regarding the Christian Faith with the Holy Scriptures as the basis for such spiritual directives.  <br /> <br />

    Apostle Jacob Napari is not married yet but has begat countless spiritual sons and daughters who look up to him in every aspect of life. 
  </p>

  <h4 style={{fontFamily : 'Poppins', fontSize: '16px', padding: '20px 0', fontWeight : 'bold'}}>The Church Leadership also consist of :</h4>

  <ul>
    <li>Resident Pastors</li>
    <li>Associate Pastors</li>
    <li>Heads of Departments and Minstries</li>
    <li>Administrative Staff</li>
  </ul>

</div>

export const ApostleBioData = [{
  key : 1,
  imageUrl : ApostleJake,
  descriptions : hist
}]


const ourVision = <p style={{marginBottom: '18px'}}> Winning A Multitude of People for the Lord <br /> through Preaching, Teaching and the giving of Helps. <br />The goal is pioneer the rebirth of Apostolic Christianity.</p>

const ourMission = <p>To train and raise Christ-centered disciples <br /> through the preaching and teaching of the word <br /> of God, prayer and prophetic services, visitations <br /> and helps for the poor.</p>

export const vision = [
  {
    key : 1,
    visionStatement : ourVision,
    missionStatement : ourMission
  }
]


const tenetGroup1 = <ul className='py-3'>
  <li className='belief'>As a church, we believe that the sin of Adam caused all men to be separated from God. And this has led to the enslavement of the soul of man in the prison of darkness incapable of approaching God by himself.
  </li>

  <li className='belief'>
    We believe that God Sent Jesus into the world to die and atone for the sin of all mankind. Jesus' sacrifice on calvary is meant to bring salvation to all mankind particularly to those who believe.
  </li >

  <li className='belief'>
    We believe in the virgin conception and birth of Jesus the Messiah. Jesus was conceived miraculously through the power of the Holy spirit as revealed in the Scriptures.
  </li>

  <li className='belief'>We believe that Jesus was flesh and blood and walked among men, ministered to the needs of man, was arrested, beaten, crucified and died a shameful death of a sinner though he was righteous</li>

   <li className='belief'>We believe in the death, resurrection and ascession of Christ to the place of authority at the right hand of the throne of God.</li>

</ul>

const tenetGroup2 = 
<ul>
  <li className='belief'>We believe that anyone who places his or her faith in the sacrifice of Christ on the cross has been granted the power of right standing with God.
  </li>

  <li className='belief'>We believe in water baptism as a direct instruction of the Lord. Baptism should be by immersion.</li>

  <li className="belief">We believe in the baptism of the Holy Spirit and the accompanying signs of his baptism such as speaking in other tongues and prophesying.
  </li>

  <li className="belief">We believe in the ministry of the Holy Spirit and His empowerment for ministry
  </li>

  <li className="belief">We believe in the holy living of all those who profess faith in the Son of God. The grace of God should not be abused and used as a guarantee for all kinds of evil living.</li>

  <li className="belief">We believe in the regular meeting together of believers for fellowship and communion with the Lord</li>
</ul>

export const tenetsOfFaith = [
  {
    key : 1,
    principle : tenetGroup1 
},
]

export const beliefSystem = [
  {
    key : 1, 
    beliefs : tenetGroup2
    }
] 


export const OtherBeliefs = ({beliefs}) =>{
  return (
    <div>
      {beliefs}
    </div>
  )
}