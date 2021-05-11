


import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const TourCard = () => {
  return (
  
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  
)}

export default TourCard













// import React from 'react'
// import { Card, Icon,Image} from 'semantic-ui-react'


// const TourCard= ({Tours}) => {
//     return(
//   <Card>
//     <Image src={Tours.image} />
//     <Card.Content>
//       <Card.Header>{Tours.name}</Card.Header>
//       {/* <Card.Meta>{tours.info}</Card.Meta> */}
      
//       <Card.Meta>
//         <span className='date'>{Tours.price}</span>
//       </Card.Meta>
      
//       <Card.Description>
//       {Tours.info}
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         Détails
//       </a>
//     </Card.Content>
    
//   </Card>
//   )}


// export default TourCard