import React from 'react';
import styled, { css } from 'styled-components';

const cellStyles = css`
  text-align center;
  white-space: nowrap;
  border-right: solid 1px black;
  border-bottom: solid 1px black;

  &:empty:after {
    content: '\00a0';
  }
`;

const stickyColumnStyle = css`
  width: 200px;
  position: absolute;
  left: 0;
  top: auto;
  text-align: center;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
`;

const Wrapper = styled.div`
  position: relative;
  font-size: 0.7rem;
`;

const Table = styled.table`
  border: none;
  border-spacing: 0;
`;

const Th = styled.th`
  ${cellStyles}
  border-top: solid 1px black;
`;

const Td = styled.td`
  ${cellStyles}
`;

const StickyTd = styled(Td)`
  ${stickyColumnStyle}
`;

const StickyTh = styled(Th)`
  ${stickyColumnStyle}
`;

const ScrollingColumns = styled.div`
  width: 120px;
  overflow-x: scroll;
  overflow-y: visible;
  margin-left: 201px;
  padding-bottom: 5px;
`;

const SponsorPackage = () => (
  <Wrapper>
    <ScrollingColumns>
      <Table>
        <thead>
          <tr>
            <StickyTh>
              BENEFITS
            </StickyTh>
            <Th>
              TITLE
            </Th>
            <Th>
              GOLD
            </Th>
            <Th>
              SILVER
            </Th>
            <Th>
              BRONZE
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StickyTd>
              <b>
                BRANDING &amp; RECOGNITION
              </b>
            </StickyTd>
            <Td>
              <b>
                ASK FOR DETAILS
              </b>
            </Td>
            <Td>
              <b>
                $10,000
              </b>
            </Td>
            <Td>
              <b>
                $5,000
              </b>
            </Td>
            <Td>
              <b>
                $1,000
              </b>
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Advertisement spot in Delegate Package
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Recognition at plenaries
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Promo products in Delegate Bags
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Promo print materials in Delegate Bags
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Photo booth branding
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Social media promotion (#posts)
            </StickyTd>
            <Td>
              10
            </Td>
            <Td>
              7
            </Td>
            <Td>
              4
            </Td>
            <Td>
              3
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Logo on Conference Merchandise
            </StickyTd>
            <Td>
              XL
            </Td>
            <Td>
              LG
            </Td>
            <Td>
              MD
            </Td>
            <Td>
              SM
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Corporate videos played at plenaries
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Corporate profile on the website
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Night events recognition
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Promotional banner in Main Room
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Branded Snapchat filter
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              <b>
                NETWORKING
              </b>
            </StickyTd>
            <Td />
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Conference Boothing*
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
          </tr>
          <tr>
            <StickyTd>
              Logo on the website
            </StickyTd>
            <Td>
              XL
            </Td>
            <Td>
              LG
            </Td>
            <Td>
              MD
            </Td>
            <Td>
              SM
            </Td>
          </tr>
          <tr>
            <StickyTd>
              External networking opportunities
            </StickyTd>
            <Td>
              3
            </Td>
            <Td>
              1
            </Td>
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Complimentary Banquet tickets
            </StickyTd>
            <Td>
              4
            </Td>
            <Td>
              2
            </Td>
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              <b>
                CORPORATE SOCIAL RESPONSIBILITY
              </b>
            </StickyTd>
            <Td />
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              SDG&apos;s recognition
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Sponsor a Student Leader recognition
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td>
              ✓
            </Td>
            <Td />
          </tr>
          <tr>
            <StickyTd>
              International recruitment discount
            </StickyTd>
            <Td>
              100%
            </Td>
            <Td>
              50%
            </Td>
            <Td>
              25%
            </Td>
            <Td />
          </tr>
          <tr>
            <StickyTd>
              <b>
                EXCLUSIVE
              </b>
            </StickyTd>
            <Td />
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Full page profile in Delegate Package
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Access to shortlisted Delegate Resumes
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Banquet keynote
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Company-themed Delegate rooms
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
          <tr>
            <StickyTd>
              Branded award presentation
            </StickyTd>
            <Td>
              ✓
            </Td>
            <Td />
            <Td />
            <Td />
          </tr>
        </tbody>
      </Table>
    </ScrollingColumns>
  </Wrapper>
);

export default SponsorPackage;
