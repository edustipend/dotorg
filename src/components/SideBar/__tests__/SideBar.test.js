import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar';
import { TestId } from '../contants';
import { BrowserRouter } from 'react-router-dom';
import { SidebarCtx } from '../../../context/SidebarContext';

describe('SideBar component', () => {
  const showSidebar = true;
  const value = { showSidebar };

  describe('The component should be in the document', () => {
    it('should show the sidebar component', () => {
      render(
        <BrowserRouter>
          <SidebarCtx.Provider value={value}>
            <SideBar />
          </SidebarCtx.Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SIDE_BAR)).toBeInTheDocument();
    });

    it('should have a list of sidebar links', () => {
      render(
        <BrowserRouter>
          <SidebarCtx.Provider value={value}>
            <SideBar />
          </SidebarCtx.Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.SIDE_BAR_LIST)).not.toBeEmptyDOMElement();
    });

    it('should have a quote container with quotes', () => {
      render(
        <BrowserRouter>
          <SidebarCtx.Provider value={value}>
            <SideBar />
          </SidebarCtx.Provider>
        </BrowserRouter>
      );
      expect(screen.getByTestId(TestId.QUOTE_CONTAINER)).not.toBeEmptyDOMElement();
    });
  });
});
