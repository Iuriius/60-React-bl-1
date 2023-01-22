import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons'


export const StatisticItem = ({stat: {title, total}, icon}) => {
return <StatisticBox>
  <IconContext.Provider value={{ color: "darkblue", size: '30px' }}>
      {icon}
    </IconContext.Provider>
  <StatisticCounter>{total}</StatisticCounter>
  <StatisticText>{title}</StatisticText>
</StatisticBox>;
};

StatisticItem.propTypes = {
  stat:PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    }
    ),
    icon: PropTypes.object.isRequired
};