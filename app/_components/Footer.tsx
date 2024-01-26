import {Mail, Instagram, Youtube, Twitter, Facebook} from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-8 bg-white flex flex-col md:flex-row justify-center md:justify-around shadow-xl items-center gap-4 py-6">
        <a href="mailto:alex.morariu.dev@gmail.com" className="flex gap-2">
            <Mail />
            <p>Contact</p>
        </a>
        <p>DonorHub © 2023</p>
        <div className="flex gap-2">
            <a href="https://www.instagram.com/"><Instagram /></a>
            <a href="https://www.youtube.com/"><Youtube /></a>
            <a href="https://www.facebook.com/"><Facebook /></a>
            <a href="https://twitter.com/?lang=ro"><Twitter /></a>
        </div>
    </footer>
  )
}

export default Footer