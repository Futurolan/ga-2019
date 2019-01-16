import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function HomePartnersList ({ data: { loading, error, nodeQuery } }) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement des partenaires !!!</div>
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return <div className='ga-home-partners-list' >
      <section className='section'>
        <div className='columns is-vcentered is-centered'>
          <div className='column is-3'>
						test
          </div>
        </div>
        {JSON.stringify(nodeQuery.entities)}
      </section>
    </div>
  }
  return <div className='notification'>Chargement des tournois en cours.</div>
}

export const partners = gql`
{
  nodeQuery(
  filter:{
    conditions:[
      {field:"field_partner_edition",value:["${publicRuntimeConfig.EDITION_ID}"]},
      {field:"type",value:["partner"],operator:EQUAL},
      {field:"status",value:["1"]}
    ]},
  sort:[{field:"field_weight",direction:ASC}]
  ) {
    entities{
      ... on NodePartner{
        title
        nid
        image:fieldPartnerImage{
          derivative(style:PARTNER_150X150){
            url
          }
        }
        url:fieldPartnerUrl
      }
    }
  }
}`

HomePartnersList.propTypes = {
  data: PropTypes.object
}

export default graphql(partners)(HomePartnersList)
