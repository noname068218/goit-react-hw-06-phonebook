import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, FromStyle, FormGroup, FormButton } from './From.style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactListSlice';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Exemple 333-33-33')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={quizSchema}
        onSubmit={(values, actions) => {
          if (contacts.some(contact => contact.name === values.name)) {
            return toast.error(
              `${values.name} Contact with this name already exists!`
            );
          }

          dispatch(
            addContact({
              name: values.name,
              number: values.number,
              id: nanoid(),
            })
          );
          actions.resetForm();
        }}
      >
        <StyledForm>
          <FormGroup>
            <label htmlFor="name"></label>
            <FromStyle name="name" id="name" placeholder="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="number"></label>
            <FromStyle
              type="tel"
              name="number"
              id="number"
              placeholder="number"
            />
            <ErrorMessage name="number" component="span" />
          </FormGroup>
          <FormButton type="submit">Add</FormButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
