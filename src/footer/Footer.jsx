import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-footercolor pt-8 pb-8">
      <h2 className="w-full text-center border-solid border-b-2 leading-0 border-black mt-3 mb-5">
        <span className="bg-footercolor px-10 font-extrabold">CONTACT US!</span>
      </h2>
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/">
          <AiFillLinkedin size="25px" className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/comsoc.vitcc/">
          <AiOutlineInstagram size="25px" className="cursor-pointer" />
        </a>
        <a href="https://github.com/computerSocietyVITC/">
          <AiOutlineGithub size="25px" className="cursor-pointer" />
        </a>
        <a href="https://discord.gg/6vkY3kcZnE">
          <FaDiscord size="25px" className="cursor-pointer" />
        </a>
      </div>
      <div className="text-sm text-center pt-2">Powered by IEEE Computer Society, VIT Chennai</div>
    </div>
  );
};

export default Footer;