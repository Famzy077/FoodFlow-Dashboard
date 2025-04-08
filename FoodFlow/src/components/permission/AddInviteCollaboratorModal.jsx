import { IoIosClose } from "react-icons/io";
import FixedModal from "../menu/modal/FixedModal";
import { Form, Formik } from "formik";
import Input_Text from "../form-inputs/Input_Text";
import Select from "../form-inputs/Select";
import RoundedMdBtn from "../button/RoundedMdBtn";
import Rounded2xlBtn from "../button/Rounded2xlBtn";

export default function AddInviteCollaboratorModal({setModalOpen}) {
    
  return (
    <FixedModal
         onclick={(e)=> e.target == e.currentTarget? setModalOpen(false):null}
          >
          <div className="w-[75vw] max-w-[800px] h-[40vh] max-h-[400px] bg-white rounded-md">
              <div className="bg-primary w-full h-16 flex items-center p-3">
                <span className="mx-auto text-white font-bold">Add & Invite new collaborators</span>
                <span
                onClick={()=>setModalOpen(false)}
                 className="justify-self-end text-secondary cursor-pointer"><IoIosClose size={28}/></span>
              </div>

              <div className="flex flex-col gap-3 items-center pt-8 pb-4 w-full">
                <div className="w-[80%] relative">
                    <Formik>
                      <Form>
                        <div className="flex items-center gap-3 w-full ">
                          <Input_Text name='collaboratorName' placeholder={'Enter collaborator name'} height='h-8' rounded="rounded-md"/>
                          <Input_Text name='collaboratorAddress' placeholder={'example@gmail.com'} height='h-8' rounded="rounded-md"/>
                          <Select name='collaboratorRole' rounded="rounded-md" height='h-8' className='pl-2 mt-3'>
                            <option value="">Select role</option>
                          </Select>
                        </div>
                      </Form>
                    </Formik>
                    <IoIosClose className="absolute top-2 -right-8" size={28}/>
                </div>
                    <RoundedMdBtn width='w-64' bg="" color="primary" border="border border-dashed" content={'Invite another collaborator'}/>
                    <Rounded2xlBtn width='w-64' content={'Send invite'}/>
                    <Rounded2xlBtn width='w-64' bg="bg-zinc-200" color="[#063150]" content={'Cancel'}/>
              </div>

          </div>
        </FixedModal>
  )
}
