import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const Rrouter = ({}) => (
  
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route name="giftSubscription" path="/gift-subscription" component={ GiftSubscription } />
        <Route name="sampleMenu" path="/sample-menu" component={ SampleMenu } />
        <Route name="blog" path="/blog" component={ Blog } />
        <Route name="weeklyMenu" path="/weekly-menu" component={ WeeklyMenu } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
)
