import { IconButton } from '../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/bin.svg';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <section>
      <ul>
        {contacts.map(contact => {
          return (
            <li className={s.li} key={contact.id}>
              <p className={s.text}>
                {contact.name} :{contact.number}{' '}
              </p>
              <IconButton
                onClick={() => onDeleteContact(contact.id)}
                arial-label="Удалить"
              >
                <AddIcon width="35px" heigth="35px" fill="white" />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
