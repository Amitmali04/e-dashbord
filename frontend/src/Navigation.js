export const navigation = [
    { name: 'Dashboard', path: '/dashboard/', icon: '' },
    {
      name: 'Products',
      icon: '',
      children: [


        { name: 'Product', icon: 'pageview', path: '/product/all-product' },
        { name: 'Add Product', icon: 'pageview', path: '/product/add-product' }
      ]
    },
    {
        name: "Visa",
        icon: "",
        children: [
    
          { name: 'Block Visa', icon: 'pageview', path: '/visa/block-visa' },
          { name: 'Index Visa', icon: 'pageview', path: '/visa/index-visa' },
          { name: 'Sourcing Collection Dashboard', icon: 'pageview', path: '/visa/sourcing-collection-dashboard' },
          { name: 'Submission Dashboard (Dubai)', icon: 'pageview', path: '/visa/submission-dashboad-dubai' },
           { name: 'Send To Mofa', icon: 'pageview', path: '/visa/send-to-mofa' },
           { name: 'Mofa Entry', icon: 'pageview', path: '/visa/mofa-entry' },
           { name: 'Dubai Data Entry', icon: 'pageview', path: '/visa/dubai-data-entry' },
          // TODO: add path
           { name: 'Submission Dashboard', icon: 'pageview', path: '/visa/submission-dashboard' },
           { name: 'Visa Received', icon: 'pageview', path: '/visa/visa-received' },
           { name: 'Mol Forwarded to visa Department', icon: 'pageview', path: '/visa/mol-forwarded-to-visa-dept' },
           { name: 'Mol Received', icon: 'pageview', path: '/visa/mol-received' },
           { name: 'Mol Submited To company', icon: 'pageview', path: '/visa/mol-submited-to-company' },
           { name: 'Work permit received from company', icon: 'pageview', path: '/visa/work-permit-recieved-from-company' },
        ]
      },
]