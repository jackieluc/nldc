import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: scroll;
  position: relative;
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  th {
    background: #FFFFFF;
    position: sticky;
    top: 0;
    padding: 10px;
    font-size: 1rem;

    &:first-child {
      left: 0;
      z-index: 2;
    }
  }
`;

const Tbody = styled.tbody`
  tr {
    td {
      padding: 10px;
      border-right: 1px solid #CCCCCC;
      font-size: 0.8rem;

      &:first-child {
        position: sticky;
        left: 0;
        background: #FFFFFF;
        font-size: 0.9rem;
      }
    }
  }
`;

const SponsorPackage = () => (
  <Wrapper id="sponsorship-package">
    <Table>
      <Thead>
        <tr>
          <th>
            BENEFITS
          </th>
          <th>
            TITLE
          </th>
          <th>
            GOLD
          </th>
          <th>
            SILVER
          </th>
          <th>
            BRONZE
          </th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <td>
            <b>
              BRANDING &amp; RECOGNITION
            </b>
          </td>
          <td>
            <b>
              ASK FOR DETAILS
            </b>
          </td>
          <td>
            <b>
              $10,000
            </b>
          </td>
          <td>
            <b>
              $5,000
            </b>
          </td>
          <td>
            <b>
              $1,000
            </b>
          </td>
        </tr>
        <tr>
          <td>
            Advertisement spot in Delegate Package
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Recognition at plenaries
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Promo products in Delegate Bags
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Promo print materials in Delegate Bags
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Photo booth branding
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Social media promotion (#posts)
          </td>
          <td>
            10
          </td>
          <td>
            7
          </td>
          <td>
            4
          </td>
          <td>
            3
          </td>
        </tr>
        <tr>
          <td>
            Logo on Conference Merchandise
          </td>
          <td>
            XL
          </td>
          <td>
            LG
          </td>
          <td>
            MD
          </td>
          <td>
            SM
          </td>
        </tr>
        <tr>
          <td>
            Corporate videos played at plenaries
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
        </tr>
        <tr>
          <td>
            Corporate profile on the website
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Night events recognition
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Promotional banner in Main Room
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Branded Snapchat filter
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            <b>
              NETWORKING
            </b>
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Conference Boothing*
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
        </tr>
        <tr>
          <td>
            Logo on the website
          </td>
          <td>
            XL
          </td>
          <td>
            LG
          </td>
          <td>
            MD
          </td>
          <td>
            SM
          </td>
        </tr>
        <tr>
          <td>
            External networking opportunities
          </td>
          <td>
            3
          </td>
          <td>
            1
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Complimentary Banquet tickets
          </td>
          <td>
            4
          </td>
          <td>
            2
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>
            <b>
              CORPORATE SOCIAL RESPONSIBILITY
            </b>
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            SDG&apos;s recognition
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
        </tr>
        <tr>
          <td>
            Sponsor a Student Leader recognition
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td>
            ✓
          </td>
          <td />
        </tr>
        <tr>
          <td>
            International recruitment discount
          </td>
          <td>
            100%
          </td>
          <td>
            50%
          </td>
          <td>
            25%
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <b>
              EXCLUSIVE
            </b>
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Full page profile in Delegate Package
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Access to shortlisted Delegate Resumes
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Banquet keynote
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Company-themed Delegate rooms
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            Branded award presentation
          </td>
          <td>
            ✓
          </td>
          <td />
          <td />
          <td />
        </tr>
      </Tbody>
    </Table>
  </Wrapper>
);

export default SponsorPackage;
