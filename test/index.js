import 'babel-polyfill';
import Dtiboundedsvg from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Dtiboundedsvg', () => {

  it('renders a React element', () => {
    React.isValidElement(<Dtiboundedsvg />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let dtiBoundedsvg = null;
    beforeEach(() => {
      rendered = mount(<Dtiboundedsvg />);
      dtiBoundedsvg = rendered.find('dti-boundedsvg');
    });

    it('renders a top level div.dti-boundedsvg', () => {
      dtiBoundedsvg.should.have.tagName('div');
      dtiBoundedsvg.should.have.className('dti-boundedsvg');
    });

    xit('renders <FILL THIS IN>', () => {
      dtiBoundedsvg.should.have.exactly(1).descendents('.the-descendent-class');
      dtiBoundedsvg.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
