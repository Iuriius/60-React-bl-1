import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import PropTypes, { shape } from 'prop-types';

const icons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>];

export const Statistics = ({title, stats}) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map((stat, indx) => <StatisticItem stat ={stat} key = {stat.id} icon = {icons[indx]}/>)}
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  })).isRequired
};