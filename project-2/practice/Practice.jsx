import Contact from "./Contact";

export default function Practice()            
{
  return (
    <div className="contacts">
    <Contact num={1} img_name="./imgs/mr-whiskerson.png" title="Mr.Whiskerson" ph_no="(212) 555-1234" mail_id="mr.whiskaz@catnap.meow"/>
    <Contact num={2} img_name="./imgs/fluffykins.png" title="Fluffykins" ph_no="(212) 555-2345" mail_id="fluff@me.com"/>
    <Contact num={3} img_name="./imgs/felix.png" title="Felix" ph_no="(212) 555-4567" mail_id="thecat@hotmail.com"/>
    <Contact num={4} img_name="./imgs/pumpkin.png" title="Pumpkin" ph_no="(0800) CAT KING" mail_id="pumpkin@scrimba.com"/>
    </div>
      
  );
}
//While string props can be passed as a string directly ,
// non string props can be passed inside curly braces directly as in
//{10} , {true} , {[id:"" ,roll_no:""]}