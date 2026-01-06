import { useState } from "react";
import { Box, CloseButton, ContainerSubmit, ContentForm, DescricaoTask, HeaderModal, InputTask, LabelForm, Overlay, SubmitButton, TitleModal } from "./styles/modal.styles";
import { NewTask } from "../../interfaces/tasks.interface";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  adicionarTask: (task: NewTask) => Promise<void>;
}

export const Modal = ({ open, onClose, adicionarTask }: ModalProps) => {
  const [form, setForm] = useState<NewTask>({});

  const addTask = async () => {
    await adicionarTask(form);
    onClose();
  };

  const renderTipo = (tipo: number) => {
    switch(tipo){
      case 0:
        return
      case 1:
        return (
          <input placeholder="Qual dia da semana?"></input>
        )
      case 2:
        return(
          <input placeholder="Qual dia do mês?"></input>
        )
    }
  }


  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <HeaderModal>
          <TitleModal>Nova Tarefa</TitleModal>
          <CloseButton onClick={onClose}>X</CloseButton>
        </HeaderModal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
            }}
          >
            <ContentForm>
              <LabelForm>
                <p>Nome da tarefa:</p>
                <InputTask type="text" onChange={(e) => setForm({...form, nome: e.target.value.toString()})}></InputTask>
              </LabelForm>
              <LabelForm>
                <p>Descrição:</p>
                <DescricaoTask rows={3} onChange={(e) => setForm({...form, descricao: e.target.value})}/>
              </LabelForm>
              <LabelForm>
                    <p>Tipo da tarefa:</p>
                    <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'space-between'}}>
                      <input onChange={(e) => setForm({...form, tipo: parseInt(e.target.value)})} type="radio" id="type1" name="type" value={0} />
                      <label htmlFor="type1">Diariamente</label>

                      <input onChange={(e) => setForm({...form, tipo: parseInt(e.target.value)})} type="radio" id="type2" name="type" value={1} />
                      <label htmlFor="type2">Semanalmente</label>

                      <input onChange={(e) => setForm({...form, tipo: parseInt(e.target.value)})} type="radio" id="type3" name="type" value={2} />
                      <label htmlFor="type3">Mensalmente</label>
                    </div>
              </LabelForm>
              {renderTipo(form.tipo || 0)}
              <ContainerSubmit>
                <SubmitButton style={{ width: '20%'}} type="submit">Salvar</SubmitButton>
              </ContainerSubmit>
            </ContentForm>
          </form>
      </Box>
    </Overlay>
  );
};
