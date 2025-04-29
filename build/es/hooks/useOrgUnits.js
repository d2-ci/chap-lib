import { useState } from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { parseOrgUnits } from '../components/maps/utils';
const REQUEST = {
  orgUnits: {
    resource: 'geoFeatures.json',
    params: _ref => {
      let {
        orgUnits
      } = _ref;
      return {
        ou: 'ou:' + orgUnits.join(';')
      };
    }
  }
};
const useOrgUnits = orgUnitIds => {
  const [orgUnits, setOrgunits] = useState();
  const {
    loading,
    error
  } = useDataQuery(REQUEST, {
    variables: {
      orgUnits: orgUnitIds
    },
    onComplete: data => setOrgunits(parseOrgUnits(data.orgUnits))
  });
  return {
    orgUnits,
    error,
    loading
  };
};
export default useOrgUnits;