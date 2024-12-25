import { Datepicker } from '@ui-kitten/components';

const CustomDate = props => {
    const { onSelectDate } = props;
    return (
        <Datepicker {...props} onSelect={nextDate=>onSelectDate(nextDate)} />
    );
};

export default CustomDate;