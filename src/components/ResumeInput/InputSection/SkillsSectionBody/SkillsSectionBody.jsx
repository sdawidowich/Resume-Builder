import PropTypes from "prop-types";
import Button from "../../../Button/Button.jsx";
import SkillsInputForm from "../InputForms/SkillsInputForm.jsx";

function SkillsSectionBody({skills, setSkills}) {

    function updateSkill(id, key, value) {
        setSkills(skills.map((item) => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
        
            return item;
        }))
    }

    function addSkill() {
        setSkills([...skills, {id: crypto.randomUUID()}])
    }

    function swapItem(index1, index2) {
        if (index1 < 0 || index2 < 0 || index1 >= skills.length || index2 >= skills.length) {
            return;
        }

        let temp = [...skills];
        [temp[index1], temp[index2]] = [temp[index2], temp[index1]];
        setSkills(temp);
    }

    return (
        <>
            <ul className="section-items">
                {
                    skills.map((item, i) => {
                        return (
                            <SkillsInputForm key={item.id} itemDetails={item} on_change={updateSkill} on_delete={(id) => {setSkills(skills.filter((item) => item["id"] != id))}} index={i} listSize={skills.length} moveItem={swapItem} />
                        )
                    })
                }
            </ul>
            
            <Button text="+ Add Skill" on_click={addSkill} />
        </>
    );
}

SkillsSectionBody.propTypes = {
    skills: PropTypes.array,
    setSkills: PropTypes.func
};

export default SkillsSectionBody;