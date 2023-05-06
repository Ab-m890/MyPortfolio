import React from 'react'
import { ContactContainer, ContactForm, ContactMainSection, ContactMethodContainer, IconBox, Text , Input, MethodBox, TextArea } from '../../styles/contact/Contact'
import { MainColor, MainTextColor } from '../../variable/Color'

//@mui
import LocationIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const Contact = () => {
  return (
    <ContactMainSection id="contact">
      <ContactContainer>
        <ContactForm>
          <Input
            type="text"
            placeholder="Full Name"
          />
          <Input
            type="email"
            placeholder="Email Address"
          />
          <Input
            type="text"
            placeholder="Address"
          />
          <TextArea
            rows={8}
            placeholder="Description"
          />
          <Input
            type="submit"
            style={{
              background: MainColor,
              color: MainTextColor,
            }}
          />
        </ContactForm>
        <ContactMethodContainer>
          <MethodBox href="https://www.google.com/maps/place/%D9%81%D8%B1%D9%86+%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA+%D8%AE%D8%A7%D9%84%D8%AF+%D8%B9%D9%8A%D8%AF%E2%80%AD/@34.3755438,35.9256988,16z/data=!4m5!3m4!1s0x15221d2c10d1f227:0x17f938e80c34a08f!8m2!3d34.3748023!4d35.9285063">
            <IconBox>
              <LocationIcon />
              Location
            </IconBox>
            <Text>
              Lebanon , Chamal , Danyeh , Deirnbouh
            </Text>
          </MethodBox>
          <MethodBox href="mailto:aboudimoustafa048@gmail.com">
            <IconBox>
              <EmailIcon />
              Email
            </IconBox>
            <Text>
              aboudimoustafa048@gmail.com
            </Text>
          </MethodBox>
          <MethodBox href="tel:+96170261514">
            <IconBox>
              <PhoneIcon />
              Phone
            </IconBox>
            <Text>
              +96170261514
            </Text>
          </MethodBox>
        </ContactMethodContainer>
      </ContactContainer>
    </ContactMainSection>
  )
}

export default Contact