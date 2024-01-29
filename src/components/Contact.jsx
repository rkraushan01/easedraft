'use client';
import React from 'react'
import { SectionWrapper } from "../hoc";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <Footer container style={{ backgroundColor: '#212121', 
    
    }}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
         
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="Use Cases" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Explainer & How to</Footer.Link>
                <Footer.Link href="#">Marketing</Footer.Link>
                <Footer.Link href="#">Training & Onboarding</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Features" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instant Avtar</Footer.Link>
                <Footer.Link href="#">Studio Avtar</Footer.Link>
                <Footer.Link href="#">Video Translate</Footer.Link>
                <Footer.Link href="#">Voice Cloning</Footer.Link>
                <Footer.Link href="#">Photo Avtar</Footer.Link>
                <Footer.Link href="#">AI Voices</Footer.Link>
                <Footer.Link href="#">Personalized Video</Footer.Link>
                <Footer.Link href="#">Streaming Avatar</Footer.Link>
                <Footer.Link href="#">AI Avatars</Footer.Link>
                <Footer.Link href="#">HeyGen API</Footer.Link>
                <Footer.Link href="#">Zapier</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">FAQ</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Tutorial</Footer.Link>
                <Footer.Link href="#">Weekly Webinar</Footer.Link>
                <Footer.Link href="#">Case Studies</Footer.Link>
                <Footer.Link href="#">Help Center</Footer.Link>
                <Footer.Link href="#">Alternative</Footer.Link>
                <Footer.Link href="#">Ambassador Program</Footer.Link>
                <Footer.Link href="#">Creator Fund</Footer.Link>
                <Footer.Link href="#">Affiliate Program</Footer.Link>
                <Footer.Link href="#">Status</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms of Service</Footer.Link>
                <Footer.Link href="#">Security Portal</Footer.Link>
                <Footer.Link href="#">Ethics</Footer.Link>
                <Footer.Link href="#">Moderation Policy</Footer.Link>
                <Footer.Link href="#">Ambassador Program</Footer.Link>
                <Footer.Link href="#">Cookie Preference</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
                
                
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}


export default SectionWrapper(Contact, "contact");