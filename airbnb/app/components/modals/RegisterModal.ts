'use client';
import axios from 'axios';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { 
    FieldValues, 
    SubmitHandler,
    useForm
  } from "react-hook-form";

  import useRegisterModal from '../../hooks/useRegisterModal';
import Modal from './Modal';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    //define como se fosse o formgroup do angular
    const { 
        register, 
        handleSubmit,
        formState: {
          errors,
        },
      } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        },
      });

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data).then(() => {
            registerModal.onClose();
        }).catch((error) => {
            console.log(error)
        }).finally(()=>{
            setIsLoading(false);
        });
      }

    return (
        <Modal
            disabled={isLoading}
     
      />
    );
      
    
    );
}

export default RegisterModal;