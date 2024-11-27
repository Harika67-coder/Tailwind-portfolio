const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
            <span>{icon}</span>
            <h2 className='text-xl font-medium mt-7 mb-2'>{title}</h2>
            <p className='text-slate-400'>{text}</p>
          </article>
  );
};
export default SkillsCard;
